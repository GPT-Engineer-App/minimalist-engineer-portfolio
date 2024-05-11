<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Julian Broudy's Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 font-sans leading-normal tracking-normal">
    <nav class="bg-gray-900">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <a class="font-bold text-white text-lg" href="#">Julian Broudy</a>
            <div class="flex items-center">
                <a class="text-white text-sm mx-2 hover:underline" href="#about">About</a>
                <a class="text-white text-sm mx-2 hover:underline" href="#projects">Projects</a>
                <a class="text-white text-sm mx-2 hover:underline" href="#skills">Skills</a>
                <a class="text-white text-sm mx-2 hover:underline" href="#blog">Blog</a>
                <a class="text-white text-sm mx-2 hover:underline" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    <section id="about" class="container mx-auto my-12">
        <h1 class="text-3xl font-bold">About Me</h1>
        <p class="mt-4">I am a passionate software developer with a knack for building elegant and efficient solutions. With a background in computer science, I specialize in creating seamless user experiences and robust backend functionalities.</p>
    </section>
    <section id="projects" class="container mx-auto my-12">
        <h1 class="text-3xl font-bold">Projects</h1>
        <div class="grid grid-cols-3 gap-4">
            <!-- Placeholder for projects -->
        </div>
    </section>
    <section id="skills" class="container mx-auto my-12">
        <h1 class="text-3xl font-bold">Skills</h1>
        <ul class="list-disc pl-5">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
        </ul>
    </section>
    <section id="blog" class="container mx-auto my-12">
        <h1 class="text-3xl font-bold">Blog</h1>
        <div class="grid grid-cols-2 gap-4">
            <!-- Placeholder for blog posts -->
        </div>
    </section>
    <section id="contact" class="container mx-auto my-12">
        <h1 class="text-3xl font-bold">Contact</h1>
        <form>
            <input type="text" placeholder="Your Name" class="block w-full p-2 border border-gray-300 rounded mt-2">
            <input type="email" placeholder="Your Email" class="block w-full p-2 border border-gray-300 rounded mt-2">
            <textarea placeholder="Your Message" class="block w-full p-2 border border-gray-300 rounded mt-2"></textarea>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Send</button>
        </form>
    </section>
</body>
</html>