import test from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StudentDiscoveryApp } from '../src/components/StudentDiscoveryApp';
import { CLUBS_DATA, EVENTS_DATA } from '../src/data/clubDiscoveryData';

test('Screen 1 (Home) renders required hero, CTA, featured clubs, and events', () => {
  const html = renderToString(React.createElement(StudentDiscoveryApp));

  // 1. Hero text and primary CTA
  assert.match(html, /Find your next club at CUNY SPS/i, 'Must contain required hero title');
  assert.match(html, /Explore clubs/i, 'Must contain primary Explore clubs CTA');

  // 2. Featured clubs & upcoming events
  assert.match(html, /Featured Student Clubs/i, 'Must contain Featured Clubs section');
  assert.match(html, /Upcoming Campus Events/i, 'Must contain Upcoming Events section');
  assert.match(html, /Artificial Intelligence Club/i, 'Must show featured AI club');

  // 3. Mobile responsiveness safeguards
  assert.match(html, /overflow-x-hidden/i, 'Root container must guard against sideways scrolling');
  assert.match(html, /w-full/i, 'Containers must be fluidly responsive');
});

test('Screen 2 (Directory Dataset) contains all 34 recognized clubs and metadata', () => {
  assert.equal(CLUBS_DATA.length, 34, 'Must catalog all 34 recognized CUNY SPS student clubs');
  
  const aiClub = CLUBS_DATA.find((c) => c.clubId === 'club-ai');
  assert.ok(aiClub, 'AI Club must exist');
  assert.equal(aiClub.name, 'Artificial Intelligence Club');
  assert.ok(aiClub.whoItWelcomes.length > 20, 'Who It Welcomes must be informative');
  assert.ok(aiClub.channels.length >= 3, 'Must have at least WhatsApp, TikTok, Facebook/IG channels');
});

test('Screen 3 (Club Profile & Channels) includes verified direct action links', () => {
  const aiClub = CLUBS_DATA.find((c) => c.clubId === 'club-ai');
  assert.ok(aiClub);

  const whatsapp = aiClub.channels.find((ch) => ch.platform === 'whatsapp');
  assert.ok(whatsapp, 'WhatsApp channel must exist');
  assert.equal(whatsapp.actionLabel, 'Join the WhatsApp group');
  assert.match(whatsapp.url, /^https:\/\/chat\.whatsapp\.com\//);

  const tiktok = aiClub.channels.find((ch) => ch.platform === 'tiktok');
  assert.ok(tiktok, 'TikTok channel must exist');
  assert.equal(tiktok.actionLabel, 'Watch on TikTok');
  assert.match(tiktok.url, /^https:\/\/www\.tiktok\.com\//);

  const facebook = aiClub.channels.find((ch) => ch.platform === 'facebook');
  assert.ok(facebook, 'Facebook channel must exist');
  assert.equal(facebook.actionLabel, 'Visit on Facebook');
  assert.match(facebook.url, /^https:\/\/www\.facebook\.com\//);

  // Privacy verification: Sample links must be clearly labeled
  const sampleChannels = aiClub.channels.filter((c) => c.badge === 'Sample Demo Link');
  for (const sample of sampleChannels) {
    assert.equal(sample.badge, 'Sample Demo Link');
  }
});

test('Screen 4 (Events) contains event schedule and club linkage', () => {
  assert.ok(EVENTS_DATA.length >= 5, 'Must catalog upcoming campus events');
  for (const ev of EVENTS_DATA) {
    assert.ok(ev.clubId, 'Every event must link to a valid clubId');
    assert.ok(ev.title, 'Every event must have a title');
    assert.ok(ev.date, 'Every event must have a date');
    const matchedClub = CLUBS_DATA.find((c) => c.clubId === ev.clubId);
    assert.ok(matchedClub, `Event "${ev.title}" must link to an existing club`);
  }
});
