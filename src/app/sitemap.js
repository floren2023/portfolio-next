export default sitemap=async()=>{
    return[
        {
            url:baseUrl ,lastModified:new Date()
        },
        {
            url:`${baseUrl}/about` ,lastModified:new Date()
        },
        {
            url:`${baseUrl}/contact` ,lastModified:new Date()
        },
        {
            url:`${baseUrl}/skills` ,lastModified:new Date()
        },
        {
            url:`${baseUrl}/projects` ,lastModified:new Date()
        },

    ]
}

  