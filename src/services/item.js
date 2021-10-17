export function getItemList() {
    return fetch('http://localhost:8080/api/v1/items')
        .then(data => data.json())
}
