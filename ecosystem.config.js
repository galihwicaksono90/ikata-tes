module.exports = {
  apps: [
    {
      name: 'portal',
      namespace: 'ikata',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'yarn start',
      // script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      exec_interpreter: '/home/prod-ikata/.nvm/versions/node/v20.10.0/bin/node',
      env_local: {
        APP_ENV: 'local' // APP_ENV=local
      },
      env_dev: {
        APP_ENV: 'dev' // APP_ENV=dev
      },
      env_prod: {
        APP_ENV: 'prod' // APP_ENV=prod
      }

    }
  ],
  experimental: {
    isrMemoryCacheSize: 0,
  }
}
