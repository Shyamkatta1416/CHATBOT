function getBotResponse(input) {
    // Hacking commands
    if (input == "show me some exploits") {
        return "We have a wide range of exploits available, including remote code execution, SQL injection, and cross-site scripting.";
    } else if (input == "tell me about phishing") {
        return "Phishing is a method used to deceive individuals into providing sensitive information such as passwords or credit card numbers. We offer phishing toolkits and tutorials.";
    } else if (input == "what tools do you have for penetration testing?") {
        return "Our collection of penetration testing tools includes Nmap, Metasploit, Wireshark, and Burp Suite, designed to identify and exploit vulnerabilities in networks and systems.";
    } else if (input == "give me information on malware") {
        return "Malware is malicious software designed to disrupt, damage, or gain unauthorized access to computer systems. We provide information on various types of malware and how to deploy them.";
    } else if (input == "show me the available botnets") {
        return "Explore our assortment of powerful botnets for conducting DDoS attacks, spam campaigns, and more.";
    } else if (input == "chat with a hacker") {
        return "Welcome to the hacker chat room. Feel free to ask any questions or discuss hacking techniques!";
    } else if (input.toLowerCase().includes("hack")) {
        return "Hacking is a complex field that requires skill and knowledge. It's important to use your abilities ethically and responsibly.";
    } else if (input.toLowerCase().includes("password")) {
        return "Passwords are a common target for hackers. Always use strong, unique passwords and enable two-factor authentication for added security.";
    } else if (input.toLowerCase().includes("encryption")) {
        return "Encryption is essential for protecting sensitive data from unauthorized access. We offer encryption tools and techniques for securing your communications.";
    } else if (input.toLowerCase().includes("anonymous")) {
        return "Anonymity is crucial for many hacking activities. We provide tips and tools for staying anonymous online.";
    } else if (input.toLowerCase().includes("dark web") || input.toLowerCase().includes("deep web")) {
        return "The dark web, also known as the deep web, is a part of the internet that is not indexed by traditional search engines. It is often associated with illegal activities, but it also has legitimate uses such as anonymous communication and whistleblowing.";
    } else if (input.toLowerCase().includes("tor")) {
        return "Tor, short for The Onion Router, is a browser that allows users to access the dark web anonymously. It routes internet traffic through a series of encrypted nodes to conceal a user's location and usage from anyone conducting network surveillance or traffic analysis.";
    } else if (input == "goodbye") {
        return "Thank you for visiting our hacker website. Stay safe and happy hacking!";
    } else {
        return "Sorry, I didn't understand that. Feel free to ask about our hacking tools or services.";
    }
}           
