<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Julian Broudy's Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Arial', sans-serif;
        }
        .smooth-scroll {
            scroll-behavior: smooth;
        }
        .hidden {
            display: none;
        }
        .block {
            display: block;
        }
    </style>
</head>
<body class="smooth-scroll bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <header class="fixed w-full bg-white dark:bg-gray-800">
        <nav id="navbar" class="flex justify-between items-center p-4">
            <div class="logo font-bold text-xl">Julian Broudy</div>
            <div class="menu hidden md:block">
                <a href="#about" class="p-2">About</a>
                <a href="#projects" class="p-2">Projects</a>
                <a href="#skills" class="p-2">Skills</a>
                <a href="#blog" class="p-2">Blog</a>
                <a href="#contact" class="p-2">Contact</a>
            </div>
            <div class="hamburger md:hidden">☰</div>
        </nav>
    </header>
    <main>
        <section id="about" class="p-4">
            <h1>About Julian</h1>
            <p>Julian Broudy is a professional software developer with extensive experience in modern web technologies...</p>
        </section>
        <section id="projects" class="p-4">
            <h1>Projects</h1>
            <div>Project 1 - Description...</div>
            <div>Project 2 - Description...</div>
        </section>
        <section id="skills" class="p-4">
            <h1>Skills</h1>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
            </ul>
        </section>
        <section id="blog" class="p-4">
            <h1>Blog</h1>
            <article>
                <h2>Latest Post</h2>
                <p>Insights into the latest web technologies...</p>
            </article>
        </section>
        <section id="contact" class="p-4">
            <h1>Contact</h1>
            <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
    <footer class="p-4 bg-gray-200 dark:bg-gray-700 text-center">
        © 2023 Julian Broudy
    </footer>
    <script>
        document.querySelector('.hamburger').addEventListener('click', function() {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('hidden');
        });
    </script>
</body>
</html>