# 功能

- 集成了supabase
- 集成了drizzle-orm
  
# 操作

- 启动docker
- 启动supabase（需要进入/packages/db目录下）

```bash
supabase start
```

- 执行`package.json` 的脚本

```json
 "scripts": {
    "generate": "drizzle-kit generate",
    "push": "pnpm with-env drizzle-kit push",
    "studio": "pnpm with-env drizzle-kit studio",
    "with-env": "dotenv -e ./.env --"
  },
```

需要在项目根目录下创建环境变量文件`.env`

```yaml
# T3-turbo默认预先配置为Supabase，并且使用 Vercel Postgres 驱动程序进行边缘绑定。
# 以下是本地部署的开发用supabase数据库
POSTGRES_URL="postgres://postgres:postgres@127.0.0.1:54322/postgres"


```
