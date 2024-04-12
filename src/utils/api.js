// fetch api
export async function getDetails() {
    const res = await fetch(``)
    if (!res.ok) {
        throw {
            message: "Failed to fetch results",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}
