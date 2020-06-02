module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://czvqzueteepiqo:7d8ad709b6cfbbb9d333123938d18f092801fa7c5c6979e3bfffc263fb24d26b@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d58h01sreukgpr",
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL ||
    "postgresql://dunder_mifflin@localhost/blogful-test",
};
