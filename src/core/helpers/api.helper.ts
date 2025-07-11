export const handleApiResponse = async (response: { ok: any; json: () => any }) => {
    if (!response.ok) {
        const errorData = await response.json()

        console.log(errorData)

        throw new Error(errorData.error
            || errorData.message
            || 'Xử lí api thất bại')
    }
    return await response.json()
}