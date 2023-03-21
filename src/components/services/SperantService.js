import axios from "axios"

export class SperantService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://cors.formulaperu.com/https://api.sperant.com/v3/",
      headers: {
        "Cache-Control": "no-cache",
        "Authorization": "mQlbKvZAlc5MpKwKs3AHr3r9v2MbhvbA1E4pX2Mw"
      },
    })
  }
  
  createClient(client) {
    const url_query = localStorage.getItem('url_query')
    
    if((/google|adwords|googleads|gclid|cpc/i).test(url_query)) client.source_id = 59 // Google Ads
    if((/facebook|fbclid|pixel/i).test(url_query)) client.source_id = 51 // facebook
    if((/icommarketing|mailchimp|mail/i).test(url_query)) client.source_id = 27 // mailing
    
    new URLSearchParams(url_query).forEach((v, k) => {
      /utm_/.test(k) && (client[`${k.toLowerCase()}`] = v)
    })

    return this.api.post("/clients", client)
  }

  projects(id = "") {
    return this.api.get(`/projects/${id}`)
  }

  users(id = "") {
    return this.api.get(`/users/${id}`)
  }

  types(parameters) {
    return this.api.get("/types", parameters)
  }

  createBudget(budget) {
    new URLSearchParams(localStorage.getItem("url_query")).forEach((v, k) => {
      /utm_/.test(k) && (budget[`${k.toLowerCase()}`] = v)
    })
    return this.api.post("/budgets", budget)
  }
}