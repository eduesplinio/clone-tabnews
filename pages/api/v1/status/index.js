function status(request, response) {
    response.status(200).json({ chave: "teste" });
}

export default status;