import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'http://localhost:4202/remoteEntry.js',
  }),
])
.catch((err) => console.error('Erro ao carregar o MFE2', err))
.then(() => import('./bootstrap'))
.catch((err) => console.error(err));
