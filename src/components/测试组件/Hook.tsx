import * as React from 'react'

const FriendStatus:React.FC = () => {
    const [isOnline, setIsOnline] = React.useState(null)
    const handleStatusChange = () => {
        setIsOnline(null)
    }

    React.useEffect(() => {})
    return (
        <div>{isOnline}</div>
    )
}