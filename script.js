document.addEventListener("DOMContentLoaded", generateUser);

function generateUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const defaultInfo = {
                name: `Name: ${user.name.first} ${user.name.last}`,
                email: `Email: ${user.email}`,
                location: `Location: ${user.location.city}, ${user.location.country}`,
                birthday: `Birthday: ${new Date(user.dob.date).toLocaleDateString()}`,
                phone: `Phone: ${user.phone}`,
                password: `Password: ${user.login.password}`
            };

            document.getElementById("user-img").src = user.picture.large;
            
            // Display the name by default
            document.getElementById("display-info").innerText = defaultInfo.name;

            setupHoverEffect(defaultInfo);
        })
        .catch((error) => {
            console.error("Error fetching user:", error);
        });
}

function setupHoverEffect(defaultInfo) {
    const displayInfo = document.getElementById('display-info');

    // Hover event listeners for icons
    document.getElementById('icon-name').addEventListener('mouseover', () => {
        displayInfo.innerText = defaultInfo.name;
    });

    document.getElementById('icon-email').addEventListener('mouseover', () => {
        displayInfo.innerText = defaultInfo.email;
    });

    document.getElementById('icon-birthday').addEventListener('mouseover', () => {
        displayInfo.innerText = defaultInfo.birthday;
    });

    document.getElementById('icon-location').addEventListener('mouseover', () => {
        displayInfo.innerText = defaultInfo.location;
    });

    document.getElementById('icon-phone').addEventListener('mouseover', () => {
        displayInfo.innerText = defaultInfo.phone;
    });

    document.getElementById('icon-password').addEventListener('mouseover', () => {
        displayInfo.innerText = defaultInfo.password;
    });
}
