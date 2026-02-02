// Dashboard Configuration
// This file is NOT committed to GitHub - kept in local environment

const DASHBOARD_CONFIG = {
    // Auth password (first run sets this, then hashes and stores)
    // Will be prompted on first access
    initialPassword: null,
    
    // API Keys (optional - for live data)
    coingeckoApi: null,
    goldApi: null,
    
    // Notion Integration (optional - for syncing)
    notionApiKey: null,
    notionDatabaseId: null
};

// Export for use in main HTML
if (typeof window !== 'undefined') {
    window.DASHBOARD_CONFIG = DASHBOARD_CONFIG;
}