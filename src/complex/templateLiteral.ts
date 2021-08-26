type NotificationObject = 'user' | 'host'
type NotificationOperation = 'changed' | 'deleted'

// "user changed" | "user deleted" | "host changed" | "host deleted"
type NotificationMessage = `${NotificationObject} ${NotificationOperation}`
