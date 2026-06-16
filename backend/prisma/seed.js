const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando Seed...');

  // Limpar dados antigos
  await prisma.request.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Senhas
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);

  // Usuários
  const admin = await prisma.user.create({
    data: {
      name: 'Administrador',
      email: 'admin@inventra.com',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  const user = await prisma.user.create({
    data: {
      name: 'Usuário Teste',
      email: 'user@inventra.com',
      password: userPassword,
      role: 'USER',
    },
  });

  // Produtos
  const notebook = await prisma.product.create({
    data: {
      name: 'Notebook Dell',
      description: 'Notebook corporativo Dell Latitude',
      quantity: 15,
      minimumStock: 5,
    },
  });

  const mouse = await prisma.product.create({
    data: {
      name: 'Mouse Logitech',
      description: 'Mouse sem fio Logitech',
      quantity: 40,
      minimumStock: 10,
    },
  });

  const teclado = await prisma.product.create({
    data: {
      name: 'Teclado Mecânico',
      description: 'Teclado mecânico para escritório',
      quantity: 20,
      minimumStock: 5,
    },
  });

  // Solicitações
  await prisma.request.create({
    data: {
      userId: user.id,
      productId: notebook.id,
      quantity: 1,
      status: 'PENDING',
    },
  });

  await prisma.request.create({
    data: {
      userId: user.id,
      productId: mouse.id,
      quantity: 2,
      status: 'APPROVED',
    },
  });

  await prisma.request.create({
    data: {
      userId: user.id,
      productId: teclado.id,
      quantity: 1,
      status: 'DELIVERED',
    },
  });

  console.log('✅ Seed executado com sucesso!');
  console.log('');
  console.log('Administrador:');
  console.log('Email: admin@inventra.com');
  console.log('Senha: admin123');
  console.log('');
  console.log('Usuário:');
  console.log('Email: user@inventra.com');
  console.log('Senha: user123');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
