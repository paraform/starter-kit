/// <reference types="@sveltejs/kit" />

type Todo = {
	uid: string;
	created_at: number;
	text: string;
	done: boolean;
};
