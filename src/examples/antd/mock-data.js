export default {
  name: 'template1',
  pages: [
    {
      id: 1,
      name: 'page-1',
      modules: [
        {
          component: 'input',
          name: 'name',
          label: 'Name',
          attrs: {
            value: 'xxx',
          }
        },
        {
          component: 'select',
          name: 'languages',
          label: 'Languages',
          attrs: {
            value: 'js',
            options: [
              { label: 'JavaScript', value: 'js' },
              { label: 'HTML', value: 'html' },
              { label: 'CSS', value: 'css' },
            ],
          }
        }
      ],
    }
  ],
};
