Nova.booting((Vue, router, store) => {
    Vue.component('notification-item', require('./components/NotificationItem'))
    Vue.component('notifications-dropdown', require('./components/NotificationsDropdown'))
})
