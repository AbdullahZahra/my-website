const articles = [
    {
        id: '100-days-of-code',
        title: '100 Days of Code: Is it worth it?',
        content: 'The 100 Days of Code challenge is a popular trend. Building consistency across Java, C++, and Node.js environments is where the true value lies for developers.',
        language: 'en',
        tags: ['Software Engineering'],
        date: 'September 2026'
    },
    {
        id: '1785949382',
        title: 'كيف تبدأ في مجال شراء الوسائط؟',
        content: 'شراء الوسائط (Media Buying) هو أحد أهم مجالات التسويق الرقمي اليوم...',
        language: 'ar',
        tags: ['Media Buying'],
        date: 'September 2026'
    }
];

module.exports = {
    getAll: () => articles,
    
    getById: (id) => articles.find(a => a.id === id),
    
    add: (title, content, language) => {
        // Using timestamp for ID ensures Arabic titles don't create broken URLs
        const newId = Date.now().toString(); 
        
        articles.push({
            id: newId,
            title: title,
            content: content,
            language: language,
            tags: ['New Article'],
            date: new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date())
        });
    }
};