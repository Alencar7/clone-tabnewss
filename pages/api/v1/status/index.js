function status(request, response) {
  response.status(200).json({ chave: "sao pessoas acima da media!" });
}

export default status;
