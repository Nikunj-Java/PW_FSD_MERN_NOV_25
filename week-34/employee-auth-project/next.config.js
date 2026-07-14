const securityHeaders=[
    {
        key:"Content-Security-Policy",
        value:"default-src 'self'; script-src 'self'; style-src 'self';"
    }
];

module.exports={ async headers(){ 
    return [
        {
            source:"/(.*)",
            headers:securityHeaders
         
            
        }

    ]}
}