function IsLoggedin() {
    return !!sessionStorage.getItem("current_user")
}

export default IsLoggedin
