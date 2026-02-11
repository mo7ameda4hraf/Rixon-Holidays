
const destinations = [
    { title: "كروز أوروبا", img: "images/Kuroz Europe.png", tag: "" },
    { title: "تركيا", img: "images/turkey.png", tag: "images/note.png",note:"مرشد عربي" },
    { title: "رحلات اوروبا", img: "images/Trips to Europe.png", tag: "" },
    { title: "روسيا", img: "images/rossia.png", tag: "images/note.png" ,note:"سائق خاص"},
    { title: "عروض عيد الفطر", img: "images/Eid Al Fitr offers.png", tag: "" },

    { title: "اوروبا", img: "images/Europe.png", tag: "images/note.png" ,note:"مرشد عربي"},
    { title: "شرق اسيا", img: "images/East Asia.png", tag: "images/note.png",note:"مرشد عربي" },
    { title: "افريقيا", img: "images/Africa.png", tag: "" },
    { title: "بولندا", img: "images/Africa.png", tag: "images/note.png",note:"سائق خاص" },
    { title: "فيتنام", img: "images/Vietnam.png", tag: "images/note.png",note:"سائق خاص" },

    { title: "اسبانيا والبرتغال", img: "images/Spain and Portugal.png", tag: "" },
    { title: "شهر العسل", img: "images/honeymoon.png", tag: "" },
    { title: "بريطانبا", img: "images/Britain.png", tag: "" },
    { title: "النمسا والمانيا", img: "images/Austria and Germany.png", tag: "" },
    { title: "اوروبا الشرقيه", img: "images/Eastern Europe.png", tag: "" },

    { title: "النرويج واسكتلندا", img: "images/Norway and Scotland.png", tag: "" },
    { title: "كوريا واليابان", img: "images/Korea and Japan.png", tag: "" },
    { title: "أمريكا والمكسيك", img: "images/America and Mexico.png", tag: "" },
    { title: "سويسرا وفرنسا", img: "images/Switzerland and France.png", tag: "" },
    { title: "إيطاليا واليونان", img: "images/Italy and Greece.png", tag: "" },

    { title: "أوروبا مع سائق خاص", img: "images/Traveling with a private driver.png", tag: "" },
];

const destinationsGrid = document.getElementById("destinationsGrid");

destinations.forEach(item => {
    destinationsGrid.innerHTML += `
    <a href="#" class="card-link">
        <div class="card">
            <img class="img-backGround" src="${item.img}" alt="${item.title}">
            ${item.tag ? `<img class="tag" src="${item.tag}" alt="${item.tag}">` : ""}
            ${item.note ? `<h4 class="tag-note">${item.note}</h4>` : ""}     
            <h3 class="title">${item.title}</h3>
        </div>
    </a>
    `;
});

// Add event listener to the Show the sidebar:
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const closeSidebarIcon = document.getElementById("close-sidebar");

const overlay = document.createElement("div");
overlay.className = "overlay";

menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");

    if (!document.body.contains(overlay)) {
        document.body.appendChild(overlay);
    }
});

closeSidebarIcon.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.remove();
}
