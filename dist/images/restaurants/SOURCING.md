# Restaurant Image Sourcing Guide

## ⚠️ IMPORTANT: NO AI-GENERATED IMAGES FOR REAL RESTAURANTS

AI-generated images must **NEVER** be used to represent specific real restaurants.
This is misleading and potentially harmful to those businesses.

## ✅ Proper Image Sourcing Workflow

### Step 1: Check Restaurant Instagram
Most restaurants post high-quality photos on Instagram:

1. Search for the restaurant's official Instagram handle
2. Look for their best interior/exterior or signature dish photos
3. Download 2-3 representative images
4. Note the photographer credit if mentioned

**Instagram handles from our data:**
- Don Julio: @donjulioparrilla
- La Cabrera: @lacabrera_ba
- Cafe Registrado: @caferegistrado
- Cafe Tortoni: @cafetortoni
- Tegui: @tegui

### Step 2: Check Official Website
Some restaurants have press kits or galleries on their websites.

### Step 3: Alternative Sources
If social media has no suitable images:

1. **Wikimedia Commons** - For historic/landmark venues
2. **Unsplash** - Only for generic atmosphere (not specific restaurants)
3. **Contact restaurant directly** - Ask for permission to use photos

### Step 4: Attribution Requirements

Every image MUST include:
```typescript
{
  slug: "restaurant-name",
  imageUrl: "/images/restaurants/filename.webp",
  source: "instagram" | "website" | "unsplash" | "wikimedia",
  sourceUrl: "https://instagram.com/handle",
  credit: "Restaurant Name (@handle) or Photographer Name",
  license: "Used with permission / CC-BY / etc",
  dateSourced: "2025-02-27",
}
```

### Step 5: Website Display
Add credit line on the restaurant page:
```jsx
<p className="text-xs text-gray-500">
  Photo: {image.credit} via {image.source}
</p>
```

## 📋 Sourcing Checklist

For each restaurant:
- [ ] Check Instagram (@handle)
- [ ] Check official website
- [ ] Download best 1-2 images
- [ ] Convert to WebP
- [ ] Add attribution entry
- [ ] Add credit on website
- [ ] Verify license allows use

## 🚫 Never Do This

- ❌ Generate AI images of real restaurants
- ❌ Use random stock photos
- ❌ Use images without attribution
- ❌ Claim AI images are real photos
- ❌ Use low-quality screenshots

## ✅ Good Examples

1. **Don Julio**: Screenshot from @donjulioparrilla Instagram showing their interior
2. **Cafe Tortoni**: Wikimedia Commons photo of historic facade
3. **Tegui**: Photo from @tegui Instagram showing tasting menu presentation

## 📁 File Organization

```
public/images/restaurants/
├── SOURCING.md          # This file
├── don-julio.webp       # Sourced from @donjulioparrilla
├── cafe-tortoni.webp    # Sourced from Wikimedia
└── ...
```

## 📝 Quick Source URLs

### Buenos Aires Restaurants
Search these Instagram handles:
- @donjulioparrilla
- @lacabrera_ba  
- @tegui
- @elpreferidodepalermo
- @caferegistrado
- @cafetortoni
- @gran_dabbang

### Mendoza Restaurants
- @1884restaurante (Francis Mallmann)
- @azafranmendoza

### Bariloche Restaurants
- @cassisbariloche

### Córdoba Restaurants
- Search manually

---

**Last Updated**: 2025-02-27
**Policy**: Real photos only. No AI fakes.
