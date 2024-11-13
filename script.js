document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");
    const releaseVersion = document.getElementById("releaseVersion");
    const releaseNotes = document.getElementById("releaseNotes");

    // Información de cada sistema operativo
    const versions = {
        mac: {
            version: "2.20.1",
            notes: "Release Notes (2018-12-15)",
            buttonText: "Download 2.19.2 for Mac",
            link: "https://example.com/mac-download"
        },
        windows: {
            version: "2.18.0",
            notes: "Release Notes (2018-10-05)",
            buttonText: "Download 2.18.0 for Windows",
            link: "https://example.com/windows-download"
        },
        linux: {
            version: "2.19.1",
            notes: "Release Notes (2018-11-12)",
            buttonText: "Download 2.19.1 for Linux",
            link: "https://example.com/linux-download"
        }
    };

    // Función para actualizar el botón de descarga según el sistema operativo
    function updateDownload(platform) {
        releaseVersion.textContent = versions[platform].version;
        releaseNotes.textContent = versions[platform].notes;
        downloadBtn.textContent = versions[platform].buttonText;
        downloadBtn.setAttribute("onclick", `location.href='${versions[platform].link}'`);
    }

    // Asignar eventos de clic a los botones de sistema operativo
    document.getElementById("macBtn").addEventListener("click", () => updateDownload("mac"));
    document.getElementById("windowsBtn").addEventListener("click", () => updateDownload("windows"));
    document.getElementById("linuxBtn").addEventListener("click", () => updateDownload("linux"));
});
