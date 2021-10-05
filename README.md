🚕 Introducción a uberDao 🚕
==================
[Video Demo]


🚕 🚙Introducción a uberdao 🚗
==================

 uberdao es un smart contract escrito bajo el protocolo NEAR que permite:
 
 1. Crear solicitud de viaje.
 2. Obtener una lista de las solicitudes de viajes que se han creado.
 3. Votar por una propuesta.
 4. Cambiar el status de un proyecto.
 5. Eliminar de la lista las solicitudes de viaje.
 

👨‍💻 Instalación en local
===========

Para correr este proyecto en local debes seguir los siguientes pasos:


Paso 1: Pre - Requisitos
------------------------------

1. Asegúrese de haber instalado [Node.js] ≥ 12 ((recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Crear un test near account [NEAR test account]
5. Instalar el NEAR CLI globally: [near-cli] es una interfaz de linea de comando (CLI) para interacturar con NEAR blockchain

    yarn install --global near-cli

Step 2: Configura tu NEAR CLI
-------------------------------

Configura tu near-cli para autorizar su cuenta de prueba creada recientemente:

    near login
    
Step 3: Clonar Repositorio
-------------------------------    

Este comando nos permite clonar el repositorio de nuestro proyecto MINGA

```bash
git clone https://github.com/noemk2/uberdao.git
git clone https://github.com/fintechlab-la/minga_avalcomunitario_nearProtocol.git
```

Una vez que hayas descargado el repositorio, asegurate de ejecutar los comandos dentro del repositorio descargado. Puedes hacerlo con
```bash
cd uberdao/
cd minga_avalcomunitario_nearProtocol/
```

Step 4: Realiza el BUILD para implementación de desarrollo de contrato inteligente 
------------------------------------------------------------------------------------

Instale el gestor de dependencia de Node.js dentro del repositorio

```bash
npm install
```

Cree el código de contrato inteligente MINGA AVAL COMUNITARIO e implemente el servidor de desarrollo local: 
```bash
yarn deploy:dev
```
Consulte` package.json` para obtener una lista completa de `scripts` que puede ejecutar con` yarn`). Este script le devuelve un contrato inteligente provisional
implementado (guárdelo para
usarlo más tarde)


¡Felicitaciones, ahora tendrá un entorno de desarrollo local ejecutándose en NEAR TestNet!


✏️ Comando para CREAR unn Solicitud de Viaje
-----------------------------------------------

Permite crear un proyecto que ha sido revisado para entrar a la red de proyectos colaborativos para ser avalados de manera distribuida.

Permite crear una solicitud de viaje para el usuario

Para Linux:
```bash
near call <your deployed contract> createTravel '{"traveler":"string","route":"string"}' --account-id <username>.testnet
```
Para windows:
```bash
near call <your deployed contract> createTravel "{\"traveler\": \"string\",\"route\":\"string\"}" --account-id <username>.testnet
```

✏️ Comando que LISTAR todas las solicitudes de viaje
--------------------------------------------

Permite listar las solicitudes de viaje que existen en nuestro contrato inteligente. 

Antes de ejecutar el comando brindado: 
 - modifica <your deployed contract> por el número de contrato generado. Por ejemplo: 'dev-1630622185346-59088620194720'.
 - modifica <username> por tu nombre de usuario en testnet. Por ejemplo: 'aval1'

Para Linux y Windows:
```bash
near view <your deployed contract> getTravelRequest --account-id <username>.testnet
```

✏️ Comando para ELIMINAR una solicitud de viaje
--------------------------------------------

Permite eliminar una solicitud que ya no pertenece a la red y se da de baja.

Para Linux:
```bash
near call <your deployed contract> eliminateTravelRequest '{"id":1}' --account-id <username>.testnet
``` 
Para Windows:
```bash
near call <your deployed contract> eliminateTravelRequest "{\"id\":<id de proyecto>}" --account-id <username>.testnet
```

## Para poder votar 

✏️ desplegar contrato /build/release/dao.wasm previamente compilado

```bash
near dev-deploy --wasmFile ./build/release/dao.wasm
```
✏️ recuerda 
Antes de ejecutar el comando brindado: 
 - modifica <your deployed contract> por el número de contrato generado. Por ejemplo: 'dev-1630622185346-59088620194720'.
 - modifica <username> por tu nombre de usuario en testnet. Por ejemplo: 'aval1'

✏️ Inicializamos y creamos una propuesta
--------------------------------------------

`init(title: string, data: string): void`

```sh
# anyone can initialize meme (so this must be done by the museum at deploy-time)
near call dev-1614603380541-7288163 init '{"title": "hello world", "propose": "I want ..."}' --account_id dev-1614603380541-7288163 --amount 3
```

✏️ Ver la propuesta
--------------------------------------------

`get_proposal(): Proposal`

```sh
# anyone can read proposal metadata
near view dev-1614603380541-7288163 get_proposal
```

```js
{
  creator: 'dev-1614603380541-7288163',
  created_at: '1614603702927464728',
  vote_score: 4,
  total_donations: '0',
  title: 'hello world',
  propose: 'I want ...',
}
```




✏️ Comando para ver votos recientes
--------------------------------------------

```sh
near view dev-1614603380541-7288163 get_recent_votes
```

```js
[
  {
    created_at: '1614603886399296553',
    value: 1,
    voter: 'dev-1614603380541-7288163'
  },
  {
    created_at: '1614603988616406809',
    value: 1,
    voter: 'sherif.testnet'
  },
  {
    created_at: '1614604214413823755',
    value: 2,
    voter: 'batch-dev-1614603380541-7288163'
  },
  [length]: 3
]
```


✏️ Ver la calificacion de la propuesta
--------------------------------------------

`get_vote_score(): i32`

```sh
near view dev-1614603380541-7288163 get_vote_score
```

```js
4
```



✏️ Comando para votar un propuesta
--------------------------------------------

`vote(value: i8): void`

```sh
# user votes for meme
near call dev-1614603380541-7288163 vote '{"value": 1}' --account_id sherif.testnet
```



✏️ Comando para votar en lotes un propuesta
--------------------------------------------

`batch_vote(value: i8, is_batch: bool = true): void`

```sh
# only the meme contract can call this method
near call dev-1614603380541-7288163 batch_vote '{"value": 2}' --account_id dev-1614603380541-7288163
```



✏️ Comando para agregar un comentario a un propuesta
--------------------------------------------

`add_comment(text: string): void`

```sh
near call dev-1614603380541-7288163 add_comment '{"text":"i love this meme"}' --account_id sherif.testnet
```


✏️ Comando para ver los comentarios recientes
--------------------------------------------


`get_recent_comments(): Array<Comment>`

```sh
near view dev-1614603380541-7288163 get_recent_comments
```

```js
[
  {
    created_at: '1614604543670811624',
    author: 'sherif.testnet',
    text: 'i love this meme'
  },
  [length]: 1
]
```


🤖 Test 
==================

Las pruebas son parte del desarrollo, luego, para ejecutar las pruebas en el contrato inteligente , debe ejecutar el siguiente comando:

    yarn test


Esto ejecutará los métodos de prueba en el `assembly/__tests__/example.spec.js` archivo


```bash
near call <your deployed contract> hello --account-id <username>.testnet
```


📂‍🗃️ Exploring and Explaining The Code 
====================================
This is a explanation of the smart contract file system

```bash
├── README.md                                       # this file
├── as-pect.config.js                               # configuration for as-pect (AssemblyScript unit testing)
├── asconfig.json                                   # configuration file for Assemblyscript compiler
├── src
│     ├── viajes                         <-- viajes contract
│     │   ├── README.md
│     │   ├── __tests__
│     │   │   ├── README.md
│     │   │   └── index.unit.spec.ts
│     │   └── assembly
│     │       ├── index.ts
│     │       └── models.ts
│     ├── dao                       <-- dao contract
│     │   ├── README.md
│     │   ├── __tests__
│     │   │   ├── README.md
│     │   │   └── index.unit.spec.ts
│     │   └── assembly
│     │       ├── index.ts
│     │       └── models.ts
│     └── utils.ts                      <-- shared contract code
│ 
├── neardev
│   ├── dev-account                                 #in this file the provisional deploy smart contract account is saved
│   └── dev-account.env                             #in this file the provisional deploy smart contract account is saved like a environment variable                             
│
├── build 
│   └── release                                    
│       ├── dao.wasm                               # compiled smart contract code using to deploy
│       └── viajes.wasm                            # compiled smart contract code using to deploy
│ 
├── package-lock.json                               # project manifest lock version
├── package.json                                    # Node.js project manifest (scripts and dependencies)
└── yarn.lock                                       # project manifest lock version
```
1. El código de los contrato inteligentes vive en la carpeta `/src` folder.
2. Para realizar una implementación de prueba, use los scripts en el `/package.json` file.



🙏 Gracias por su tiempo 
==============================================
Aquí dejamos una propuesta de diseño [UX/UI] para desarrollar la parte frontend del proyecto comunitario. 


  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [NEAR accounts]: https://docs.near.org/docs/concepts/account
  [NEAR Wallet]: https://wallet.testnet.near.org/
  [near-cli]: https://github.com/near/near-cli
  [NEAR test account]: https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account
  [nvm]: https://github.com/nvm-sh/nvm
  [UX/UI]: https://www.figma.com/proto/GqP5EF5zRZRvAv3HoaSsuN/uniwap?node-id=39%3A2300&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=39%3A2300&hide-ui=1
  [UX/UI]: https://www.figma.com/proto/0dZLC0WI1eVsfjeKu3T8J8/Garant%C3%ADzame?node-id=2%3A8&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=2%3A8
  [Video Demo]: https://www.loom.com/share/c3b906012b7e4c32a2250929caab64ec?sharedAppSource=personal_library
