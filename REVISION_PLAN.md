# Portfolio Site Revision Plan

## 📌 Overview
Using reference materials from `references/` folder to revise and update the live site at https://portfolio-ucmm.vercel.app/

**Reference Materials:**
- `Desktop Mockup.png` - Desktop design layout
- `Mobile Mockup.png` - Mobile responsive design  
- `Site Blueprint.png` - Site architecture and section diagram
- `portfolio-site-complete-documentation-single-file.pdf` - Functionality, expectations, copy-decks

**Important:** These are BASE REFERENCE only. We are creating the SOURCE OF TRUTH in the codebase.

---

## 🎯 Revision Checklist

### Section 1: Home Page
- [ ] Compare with Desktop Mockup - layout matches
- [ ] Compare with Mobile Mockup - responsive design matches
- [ ] Verify all sections from Site Blueprint exist
- [ ] Update copy from documentation PDF
- [ ] Check hero section content and styling
- [ ] Verify skills display correctly
- [ ] Confirm featured projects grid matches design
- [ ] Test CTA section

### Section 2: About Page
- [ ] Compare with mockups - layout and design
- [ ] Update bio text from documentation
- [ ] Add/verify profile photo placement
- [ ] Check experience timeline matches blueprint
- [ ] Verify skills and tools sections
- [ ] Confirm resume download button works
- [ ] Test all links

### Section 3: Projects Page
- [ ] Compare with mockups - grid layout
- [ ] Verify project cards match design
- [ ] Check filter tags functionality
- [ ] Confirm all projects from documentation are listed
- [ ] Test project card hover effects
- [ ] Verify "View All Projects" CTA

### Section 4: Project Detail Pages
- [ ] Compare with mockups - case study layout
- [ ] Verify project header matches design
- [ ] Check metadata display (year, client, role)
- [ ] Confirm tags display correctly
- [ ] Test action buttons (View Live, View Code)
- [ ] Verify hero image placement
- [ ] Check content rendering (markdown)
- [ ] Confirm technologies section
- [ ] Test related projects section

### Section 5: Contact Page
- [ ] Compare with mockups - form layout
- [ ] Update contact information from documentation
- [ ] Verify contact info section matches design
- [ ] Check social links
- [ ] Test form fields and validation
- [ ] Set up form submission (Formspree or similar)
- [ ] Verify FAQ section matches documentation
- [ ] Confirm CTA section

---

## 📝 Copy-Deck Extraction

### Home Page Copy
- [ ] Hero headline
- [ ] Hero subheadline/tagline
- [ ] Skills section description
- [ ] Featured projects section description
- [ ] CTA section text

### About Page Copy
- [ ] Bio/introduction
- [ ] Experience descriptions
- [ ] Skills descriptions
- [ ] Education details

### Projects Page Copy
- [ ] Page description
- [ ] Filter tag labels
- [ ] CTA text

### Contact Page Copy
- [ ] Contact info (email, phone, location)
- [ ] Social media links
- [ ] Form field labels
- [ ] Form submission button text
- [ ] FAQ questions and answers

---

## 🎨 Design & Styling Updates

### Colors
- [ ] Extract color palette from mockups
- [ ] Update `tailwind.config.ts` with correct colors
- [ ] Verify color usage matches design

### Typography
- [ ] Extract font choices from mockups
- [ ] Update `tailwind.config.ts` with correct fonts
- [ ] Verify font sizes match design
- [ ] Check font weights

### Spacing & Layout
- [ ] Verify padding and margins match mockups
- [ ] Check section spacing
- [ ] Confirm grid layouts match design
- [ ] Test responsive breakpoints

### Components
- [ ] Buttons - style, hover states
- [ ] Cards - shadows, borders, hover effects
- [ ] Navigation - style, mobile menu
- [ ] Form inputs - styling, focus states
- [ ] Tags/badges - styling

---

## 🔧 Technical Updates

### Functionality
- [ ] Contact form submission
- [ ] Project filtering by tags
- [ ] Dynamic project pages from markdown
- [ ] Image optimization
- [ ] SEO metadata

### Performance
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Bundle size optimization
- [ ] Lighthouse score improvements

### Accessibility
- [ ] Alt text for all images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation
- [ ] Color contrast ratios

---

## 📊 Priority Matrix

### High Priority (Must Have)
1. [ ] Home page matches desktop mockup
2. [ ] Mobile responsive design works
3. [ ] All copy from documentation is added
4. [ ] Contact form is functional
5. [ ] All sections from blueprint exist

### Medium Priority (Should Have)
1. [ ] Projects page matches design
2. [ ] About page content complete
3. [ ] Color palette matches mockups
4. [ ] Typography matches design
5. [ ] Project detail pages styled

### Low Priority (Nice to Have)
1. [ ] Advanced animations
2. [ ] Micro-interactions
3. [ ] Performance optimizations
4. [ ] Additional accessibility features

---

## 🎯 Next Steps

### Immediate Actions
1. Review Desktop Mockup.png and compare with live site
2. Review Mobile Mockup.png and test responsive design
3. Review Site Blueprint.png and verify all sections exist
4. Extract copy from documentation PDF

### Short-term Goals
1. Update all page copy from documentation
2. Fix any layout issues compared to mockups
3. Set up contact form functionality
4. Verify mobile responsiveness

### Long-term Goals
1. Fine-tune design details
2. Add all projects from documentation
3. Optimize performance
4. Add any missing features

---

## 📅 Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Phase 1: Content & Copy | 1-2 days | All text content from documentation added |
| Phase 2: Design Matching | 2-3 days | Site matches mockups visually |
| Phase 3: Functionality | 1-2 days | All features working |
| Phase 4: Polish | 1 day | Final touches and testing |

---

## 💡 Notes

- **Reference vs. Source of Truth:** The files in `references/` are our BASE REFERENCE. The codebase is our SOURCE OF TRUTH.
- **Iterative Process:** We'll make updates, review against references, and refine.
- **Version Control:** All changes should be committed with descriptive messages.
- **Testing:** Test on multiple devices and browsers after each major update.

---

*Last updated: [Date]*
*Next review: [Date]*
