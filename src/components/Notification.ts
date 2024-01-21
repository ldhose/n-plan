type NotificationItem = {
    text: string
}

export const notify = ({text}: NotificationItem) => {
    if(!("Notification" in window)) {
        console.log("This browser doesn't support desktop notification")
    } else if (Notification.permission === "granted") {
        new Notification("text")
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if(permission === "granted") {
                new Notification("text")
            }
        })
    }



}