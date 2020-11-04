export const headers ={
    "X-Requested-With" : "XMLHttpRequest"
}

export const menuRoute = async()=>{
    try {
        const response = await fetch('https://tektickets.com/api/user/menus',{headers})
        const menuData = await response.json()
        if(menuData.status ==='success'){
            return menuData
        }
        return 'error'
    } catch (error) {
        return error
    }
}