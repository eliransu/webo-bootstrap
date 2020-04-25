module.exports = plop => {
  // #region helpers
  plop.setHelper(
    'capitalize',
    text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  );
  plop.setHelper(
    'uppercase',
    text => text.toUpperCase()
  );
  plop.setHelper(
    'lowercase',
    text => text.toLowerCase()
  );
  plop.setGenerator('WeboTemplate', {
    description: 'add new redux template',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'What is the Redux\'s type?',
        validate: value => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'a name for the screen must be provided';
        },
      },
      {
        type: 'input',
        name: 'action',
        message: 'What is the Redux\'s actionName?',
        validate: value => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'a action name for the screen must be provided';
        },
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/data/modules/{{type}}',
        base: 'plop-templates/redux/actions/add',
        templateFiles: 'plop-templates/redux/actions/add/*.hbs',
        skipIfExists: true,
      },
      {
        type: 'addMany',
        destination: 'src/data/modules/{{type}}',
        base: 'plop-templates/redux/reducer/add',
        templateFiles: 'plop-templates/redux/reducer/add/*.hbs',
        skipIfExists: true,
      },
      {
        type: 'addMany',
        destination: 'src/data/modules/{{type}}',
        base: 'plop-templates/redux/service/add',
        templateFiles: 'plop-templates/redux/service/add/*.hbs',
        skipIfExists: true,
      },
      {
        type: 'addMany',
        destination: 'src/data/modules/{{type}}',
        base: 'plop-templates/redux/types/add',
        templateFiles: 'plop-templates/redux/types/add/*.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/data/modules/{{type}}/{{type}}.actions.js',
        pattern: '//! PLOP_APPEND_ACTION',
        separator: '\n\n',
        templateFile: 'plop-templates/redux/actions/actions.append.hbs',
      },
      {
        type: 'append',
        path: 'src/data/modules/{{type}}/{{type}}.reducer.js',
        pattern: '//! PLOP_APPEND_REDUCER',
        separator: '\n\n',
        templateFile: 'plop-templates/redux/reducer/reducer.append.hbs',
      },
      {
        type: 'append',
        path: 'src/data/modules/{{type}}/{{type}}.service.js',
        pattern: '//! PLOP_APPEND_SERVICE',
        separator: '\n\n',
        templateFile: 'plop-templates/redux/service/service.append.hbs',
      },
      {
        type: 'append',
        path: 'src/data/modules/{{type}}/{{type}}.types.js',
        pattern: '//! PLOP_APPEND_TYPES',
        separator: '\n\n',
        templateFile: 'plop-templates/redux/types/types.append.hbs',
      },
      {
        type: 'append',
        path: 'src/data/reducers.js',
        pattern: '//! PLOP MAIN_REDUCERS_IMPORT',
        separator: '\n',
        templateFile: 'plop-templates/redux/mainReducers/reducers.import.hbs',
      },
      {
        type: 'append',
        path: 'src/data/reducers.js',
        pattern: '//! PLOP MAIN_REDUCERS_APPEND',
        separator: '\n',
        templateFile: 'plop-templates/redux/mainReducers/reducers.append.hbs',
      },
    ],
  });
};
