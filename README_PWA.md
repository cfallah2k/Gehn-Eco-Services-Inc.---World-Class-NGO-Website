# PWA Setup Guide

This website is now a Progressive Web App (PWA) that works offline and can be installed on devices.

## Features

- ✅ **Offline Support**: Core pages work without internet connection
- ✅ **Installable**: Can be installed on mobile and desktop devices
- ✅ **Fast Loading**: Service worker caches assets for instant loading
- ✅ **Responsive**: Optimized for all screen sizes

## Installation

### For Users

1. **Mobile (Android/Chrome)**:
   - Visit the website
   - Tap the menu (3 dots) in your browser
   - Select "Add to Home Screen" or "Install App"
   - Confirm installation

2. **Mobile (iOS/Safari)**:
   - Visit the website
   - Tap the Share button
   - Select "Add to Home Screen"
   - Confirm installation

3. **Desktop (Chrome/Edge)**:
   - Visit the website
   - Look for the install prompt in the address bar
   - Click "Install" when prompted

### For Developers

1. **Generate Icons**:
   - Create `icon-192x192.png` (192x192 pixels)
   - Create `icon-512x512.png` (512x512 pixels)
   - Place them in the `/public` folder

2. **Service Worker**:
   - Already configured at `/public/sw.js`
   - Automatically registers on page load
   - Caches pages and assets for offline use

3. **Manifest**:
   - Configured at `/public/manifest.json`
   - Customize app name, colors, and icons

## Offline Pages

The following pages are available offline:
- Homepage (/)
- About (/about)
- Services (/services)
- Contact (/contact)
- Offline fallback page (/offline)

## Testing

1. **Test Offline Mode**:
   - Open DevTools → Network tab
   - Enable "Offline" mode
   - Navigate the site - cached pages should load

2. **Test Installation**:
   - Use Chrome DevTools → Application → Manifest
   - Check for any errors
   - Test install prompt

## Customization

Edit `/public/manifest.json` to customize:
- App name and description
- Theme colors
- Icons
- Start URL

Edit `/public/sw.js` to customize:
- Cached pages
- Cache strategies
- Offline fallback

## Browser Support

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Safari (iOS 11.3+)
- ✅ Firefox (Android)
- ⚠️ Safari (Desktop) - Limited PWA support

## Notes

- Service worker updates automatically
- Clear cache in DevTools to force update
- HTTPS required for production PWA

