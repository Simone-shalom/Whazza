import getEvents from "@/actions/getEvents"


export default async function sitemap() {

    const baseUrl = 'https://whazza.vercel.app'

    const events = await getEvents()
    const eventsUrls = events.map((event) =>{
        return {
            url: `${baseUrl}/listings/${event.id}`,
            lastModified: new Date()
        }
    }) ?? []

    const pages = [
        'events', 'pricing', 'dashboard', 'auth', 'createEvent',
    ]
    const pagesUrls = pages.map((page) => {
        return {
            url: `${baseUrl}/${page}`,
            lastModified: new Date()
        }
    }) ?? [] 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...eventsUrls,
    ...pagesUrls
  ]
}