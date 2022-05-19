import prisma from '$lib/prisma';
// import type { RequestHandler } from '@sveltejs/kit';

export async function get() {
	const items = await prisma.todo.findMany();

	return {
		body: { items }
	};
}

// export const get = async () => {
// 	// get the prisma data
// 	const data = await prisma.users.findMany();

// 	// we can shape the data however we want
// 	// so our user doesn't have to pay the cost for it
// 	const users = data.map((user) => {
// 		return {
// 			name: user.name,
// 			id: user.id
// 		};
// 	});

// 	console.log('prisma data', users);

// 	if (!users) {
// 		return { status: 400 };
// 	}

// 	return {
// 		headers: { 'Content-Type': 'application/json' },
// 		status: 200,
// 		body: { users }
// 	};
// };

// //POST DATA via form
// export const post = async ({ request }) => {
// 	const form = await request.formData();
// 	const name = form.get('form-name');

// 	//db generates id for us
// 	await prisma.users.create({
// 		data: {
// 			name: name
// 		}
// 	});
// 	return {};
// };

// //DELETE DATA via form
// export const del = async ({ request }) => {
// 	const form = await request.formData();
// 	const id = form.get('id');

// 	await prisma.users.delete({ where: { id: id } });

// 	return {
// 		status: 303,
// 		headers: { location: '/users' }
// 	};
// };
