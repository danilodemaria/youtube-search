import json
import sys
from youtubesearchpython import VideosSearch
title = sys.argv[1]

videosSearch = VideosSearch(title, limit = 10)

# print(json.dumps(videosSearch.result(), indent=4, sort_keys=True))
print(json.dumps(videosSearch.result(), indent=8, sort_keys=False))




