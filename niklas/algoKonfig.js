function algoKonfig(){
    document.getElementById("konfigTabelle").innerHTML = "<button class=\"back\" onclick=\"location.reload()\"><i class=\"fas fa-chevron-left\"></i></button><br><br><table><tr>\n" +
        "\n" +
        "                    <th>Trainingsfeld:</th>\n" +
        "\n" +
        "                    <td><input type=\"text\"  id=\"trainingField\"/></td>\n" +
        "\n" +
        "                    <td><span id=\"trainingField-error\"></span></td>\n" +
        "\n" +
        "                </tr>\n" +
        "\n" +
        "                <tr>\n" +
        "\n" +
        "                    <th>Trainingszeiten:</th>\n" +
        "\n" +
        "                    <td><input type=\"text\"  id=\"trainingTimes\"/></td>\n" +
        "\n" +
        "                    <td><span id=\"trainingTimes-error\"></span></td>\n" +
        "\n" +
        "                </tr>\n" +
        "\n" +
        "                <tr>\n" +
        "\n" +
        "                    <th>Trainer:</th>\n" +
        "\n" +
        "                    <td><input type=\"text\"  id=\"trainer\"/></td>\n" +
        "\n" +
        "                    <td><span id=\"trainer-error\"></span></td>\n" +
        "\n" +
        "                </tr></table><br><br>"
}