import {graph, auth, config } from '@grafbase/sdk'

const g = graph.Standalone()
const User = g.models('User', {
  name: g.string().length({min:2, max:20}), 
email: g.string().unique(), avatarUrl: g.url(), description: g.string().optional(), githabUrl: g.url().optional(), linkedInUrl: g.url().optional(), projects: g.relation(()= > Project).list().optional(),  })

const Project = g.models('Project', {
  title: g.string().length({min:3, max:15}), description: g.string(), image: g.url(), liveSiteUrl: g.url(), githabUrl: g.url(), category: g.string().search(), createBy: g.relation(()=> User)  
})

export default config({
  graph: g,
  
  auth: {
   
    rules: (rules) => {
      rules.public()
    },
  },
  
})
