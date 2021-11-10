import ngrok from 'ngrok'
import chalk from 'chalk'

export default function(){

    const { nuxt } = this
    const options = nuxt.options.ngrok || {}
    const token = process.env.NGROK_TOKEN || options.token
    let url
    
    if(nuxt.options.dev === false){
        return
    }

    nuxt.hook('listen', async function(server, { port }){
        

        if (token) {
            await ngrok.authtoken(token)
        }

        url = await ngrok.connect(port)

        nuxt.options.publicRuntimeConfig.ngrok = { url }

        //console.log(url);

        nuxt.options.cli.badgeMessages.push(`Public URL: ${chalk.underline.yellow(url)}`)
        

    })

    nuxt.hook('close', function(){
        url && ngrok.disconnect()
    })


}