
const destinations = [
    { title: "كروز أوروبا", img: "images/Kuroz Europe.webp", tag: "" },
    { title: "تركيا", img: "images/turkey.webp", tag: "images/note.webp",note:"مرشد عربي" },
    { title: "رحلات اوروبا", img: "images/Trips to Europe.webp", tag: "" },
    { title: "روسيا", img: "images/rossia.webp", tag: "images/note.webp" ,note:"سائق خاص"},
    { title: "عروض عيد الفطر", img: "images/Eid Al Fitr offers.webp", tag: "" },

    { title: "اوروبا", img: "images/Europe.webp", tag: "images/note.webp" ,note:"مرشد عربي"},
    { title: "شرق اسيا", img: "images/East Asia.webp", tag: "images/note.webp",note:"مرشد عربي" },
    { title: "افريقيا", img: "images/Africa.webp", tag: "" },
    { title: "بولندا", img: "images/Africa.webp", tag: "images/note.webp",note:"سائق خاص" },
    { title: "فيتنام", img: "images/Vietnam.webp", tag: "images/note.webp",note:"سائق خاص" },

    { title: "اسبانيا والبرتغال", img: "images/Spain and Portugal.webp", tag: "" },
    { title: "شهر العسل", img: "images/honeymoon.webp", tag: "" },
    { title: "بريطانبا", img: "images/Britain.webp", tag: "" },
    { title: "النمسا والمانيا", img: "images/Austria and Germany.webp", tag: "" },
    { title: "اوروبا الشرقيه", img: "images/Eastern Europe.webp", tag: "" },

    { title: "النرويج واسكتلندا", img: "images/Norway and Scotland.webp", tag: "" },
    { title: "كوريا واليابان", img: "images/Korea and Japan.webp", tag: "" },
    { title: "أمريكا والمكسيك", img: "images/America and Mexico.webp", tag: "" },
    { title: "سويسرا وفرنسا", img: "images/Switzerland and France.webp", tag: "" },
    { title: "إيطاليا واليونان", img: "images/Italy and Greece.webp", tag: "" },

    { title: "أوروبا مع سائق خاص", img: "images/Traveling with a private driver.webp", tag: "" },
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
