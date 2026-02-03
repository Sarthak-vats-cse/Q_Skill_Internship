async function downloadSong() {
  const spotifyLink = document.getElementById("spotifyLink").value.trim();
  const result = document.getElementById("result");

  if (spotifyLink === "") {
    alert("Please enter a Spotify song link");
    return;
  }

  result.innerHTML = "Fetching Details...";

  try {
    // Encode user-provided Spotify link
    const encodedLink = encodeURIComponent(spotifyLink);

    const response = await fetch(
      `https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=${encodedLink}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "394f315fabmshd4b32062cb845fdp125385jsne880a5651d9e",
          "X-RapidAPI-Host": "spotify-downloader9.p.rapidapi.com"
        }
      }
    );

    const data = await response.json();

    result.innerHTML = `
  <h3>${data.data.title}</h3>
  <p>${data.data.artist}</p>
  <button onclick="window.open('${data.data.downloadLink}', '_blank')">
    Download Song
  </button>
`;

  } catch (error) {
    console.error(error);
    alert("Please Enter a valid song link!!");
    result.innerHTML = "";
  }
}
function clearInput() {
  document.getElementById("spotifyLink").value = "";
  document.getElementById("result").innerHTML = "";
}

