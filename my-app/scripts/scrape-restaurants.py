#!/usr/bin/env python3
"""
Restaurant Image Scraper - Uses Overseer Instagram Scraper Skill

Unified scraping with Apify (primary) + Google Images fallback.

Usage:
    export APIFY_TOKEN="your-token"
    export GOOGLE_API_KEY="your-key"
    export GOOGLE_CX="your-cx"
    
    python scripts/scrape-restaurants.py --source all
"""

import os
import sys
from pathlib import Path

# Add overseer to path
sys.path.insert(0, str(Path.home() / "dev/overseer/standalone-repos/overseer-python/src"))

from overseer.skills.instagram_scraper import RestaurantImageScraper
from overseer.skills.instagram_scraper.__main__ import main

if __name__ == "__main__":
    main()
