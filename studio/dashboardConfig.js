export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d0a1be77520b523d15d6f3f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-3-studio',
                  apiId: '3dae8d01-597d-45a0-850a-df09db4b4706'
                },
                {
                  buildHookId: '5d0a1be745ea0d1a39437f62',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-3',
                  apiId: '222b7231-2c3c-4de6-ae0c-b8fc6549b871'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-portfolio-3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
