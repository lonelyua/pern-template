import prisma from '../db';
const create = async (data: any) => prisma.item.create({ data });
const getAll = async () => prisma.item.findMany();
const getOne = async (id: number) => prisma.item.findUnique({ where: { id } });
const update = async (id: number, data: any) => prisma.item.update({ where: { id }, data });
const remove = async (id: number) => prisma.item.delete({ where: { id } });
export default { create, getAll, getOne, update, remove };
