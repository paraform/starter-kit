// Genius gist from jckw https://gist.github.com/jckw/1353514da357ba265958e3cbba102e07

type Classnames = string[] | string;

type VariantConfig = {
  [variant: string]: { [option: string]: Classnames };
};

type Config<V extends VariantConfig> = {
  base: Classnames;
  variants: V;
  compoundVariants?: ({
    [key in keyof V]?: keyof V[key];
  } & { css: Classnames })[];
  defaultVariants?: {
    [key in keyof V]?: keyof V[key];
  };
};

// A tool for flattening arrays, could use lodash's flattenDeep
const makeArray = (x: string[] | string) => (Array.isArray(x) ? x : [x]);

const variants =
  <V extends VariantConfig>(config: Config<V>) =>
  (variantProps: {
    [key in keyof V]?: keyof V[key];
  }) => {
    const variantsActive = {
      ...config.defaultVariants,
      ...variantProps,
    };

    const simpleStyles = Object.entries(variantsActive).map(([name, value]) =>
      makeArray(config.variants[name as keyof V][value as string]).join(" ")
    );
    const compoundStyles = config.compoundVariants?.map((compoundVariant) => {
      const { css, ...vMatch } = compoundVariant;
      const match = Object.entries(vMatch).every(
        ([k, v]) => (variantsActive as { [key: string]: string })[k] === v
      );

      return makeArray(match ? css : "").join(" ");
    });

    return [
      ...makeArray(config.base),
      ...makeArray(simpleStyles),
      ...(compoundStyles || []),
    ].join(" ");
  };

export default variants;
