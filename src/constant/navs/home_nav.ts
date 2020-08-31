type HomeNav = {
    label: string,
    href: string
}

type GetNav = (label: string, href: string) => HomeNav

const getNav: GetNav = (label: string, href: string) => ({label, href})

const homeNavs: Array<HomeNav> = [
    getNav("MEN", "/men"),
    getNav("WOMEN", "/women"),
    getNav("KIDS", "/kids"),
    getNav("SPORT", "/sport"),
    getNav("BRAND", "/brand")
]

const homeSecondaryNavs: Array<HomeNav> = [
    getNav("30% OFF NMD | CODE: SNEAKERS", "/"),
    getNav("COVID-19 RELIEF IS A TEAM EFFORT", "/"),
    getNav("FREE SHIPPING OVER $49 AND FREE 30 DAY RETURNS", "/")
]

export {homeNavs, homeSecondaryNavs}
