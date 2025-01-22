document.addEventListener("DOMContentLoaded", function () {
    const blogsContainer = document.querySelector(".blogs-container");
  
    if (blogsContainer) {
      const firebaseConfig = {
        apiKey: "AIzaSyDVtopK2EQUOz5bXTulgbhjitCshOJGJ3A",
        authDomain: "tidyscapes-6ff90.firebaseapp.com",
        projectId: "tidyscapes-6ff90",
        storageBucket: "tidyscapes-6ff90.firebasestorage.app",
        messagingSenderId: "765887611698",
        appId: "1:765887611698:web:e0863ee181b7a0d995cd2b",
        measurementId: "G-1RGJ5M1BER",
      };
  
      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore();
  
      db.collection("blogs")
        .get()
        .then((snapshot) => {
          blogsContainer.innerHTML = ""; // Clear previous blogs
  
          snapshot.forEach((doc) => {
            const blog = doc.data();
            const blogDate = blog.date && blog.date.seconds
              ? new Date(blog.date.seconds * 1000)
              : null;
  
            const formattedDate = blogDate
              ? {
                  day: blogDate.getDate(),
                  month: blogDate.toLocaleString("default", { month: "long" }),
                  year: blogDate.getFullYear(),
                }
              : { day: "Unknown", month: "", year: "" };
  
            // Create a single blog card container
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");
  
            blogCard.innerHTML = `
              <div class="blog-date">
                <span class="day">${formattedDate.day}</span>
                <span class="month-year">${formattedDate.month} ${formattedDate.year}</span>
              </div>
              <img src="${blog.imageURL}" alt="${blog.title}" class="blog-image">
              <div class="blog-details">
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-excerpt">${blog.content.substring(0, 100)}...</p>
                <a href="blog-detail.html?id=${doc.id}" class="read-more">Read more</a>
              </div>
            `;
  
            // Append the blog card to the blogs container
            blogsContainer.appendChild(blogCard);
          });
        })
        .catch((error) => {
          console.error("Error fetching blogs:", error);
        });
    } else {
      console.log("blogsContainer not found.");
    }
  });
  