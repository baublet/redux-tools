export default function copyArrayOrObject(arrayOrObject) {
    return Array.isArray(arrayOrObject) ?
            arrayOrObject.slice(0) :
            Object.assign(arrayOrObject)
}