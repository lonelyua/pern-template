// TO DO: Need add correct types instead any

import prisma from '../db';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const create = async (data: any) => prisma.item.create({ data });
const getAll = async () => prisma.item.findMany();
const getOne = async (id: number) => prisma.item.findUnique({ where: { id } });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const update = async (id: number, data: any) => prisma.item.update({ where: { id }, data });
const remove = async (id: number) => prisma.item.delete({ where: { id } });
export default { create, getAll, getOne, update, remove };
