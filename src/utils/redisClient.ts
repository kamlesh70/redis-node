import Redis from "ioredis";


const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
});


export = {
  redisClient: () => redis,
  getKeyName: (key: string) => `${process.env.REDIS_KEY_PREFIX}:${key}`
}