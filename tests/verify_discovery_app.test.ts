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

  // 4. Top utility bar social networks (LinkedIn & Facebook)
  assert.match(html, /https:\/\/www\.linkedin\.com\/school\/cuny-school-of-professional-studies\//i, 'Top header must feature student LinkedIn link');
  assert.match(html, /https:\/\/www\.facebook\.com\/cunysps\//i, 'Top header must feature SPS Facebook link');
  assert.match(html, /Student LinkedIn/i, 'Must have Student LinkedIn action label');
  assert.match(html, /SPS Facebook/i, 'Must have SPS Facebook action label');
});

test('Screen 2 (Directory Dataset) contains all 34 recognized clubs and metadata', () => {
  assert.equal(CLUBS_DATA.length, 34, 'Must catalog all 34 recognized CUNY SPS student clubs');
  
  const aiClub = CLUBS_DATA.find((c) => c.clubId === 'club-ai');
  assert.ok(aiClub, 'AI Club must exist');
  assert.equal(aiClub.name, 'Artificial Intelligence Club');
  assert.ok(aiClub.whoItWelcomes.length > 20, 'Who It Welcomes must be informative');
  assert.ok(aiClub.channels.length >= 3, 'Must have at least WhatsApp, TikTok, Facebook/IG channels');
});

test('Screen 3 (Club Profile & Channels) includes verified direct action links and omits unverified channels', () => {
  const aiClub = CLUBS_DATA.find((c) => c.clubId === 'club-ai');
  assert.ok(aiClub);

  const whatsapp = aiClub.channels.find((ch) => ch.platform === 'whatsapp');
  assert.ok(whatsapp, 'WhatsApp channel must exist');
  assert.equal(whatsapp.actionLabel, 'Join WhatsApp');
  assert.match(whatsapp.url, /^https:\/\/chat\.whatsapp\.com\//);

  assert.ok(aiClub.logoUrl, 'AI club must have verified logoUrl');
  assert.equal(aiClub.logoUrl, './club-logos/ai-club.jpg');

  const instagram = aiClub.channels.find((ch) => ch.platform === 'instagram');
  assert.ok(instagram, 'Instagram channel must exist');
  assert.match(instagram.url, /^https:\/\/www\.instagram\.com\//);

  const website = aiClub.channels.find((ch) => ch.platform === 'website');
  assert.ok(website, 'OpenLab website channel must exist');
  assert.match(website.url, /^https:\/\/openlab\.sps\.cuny\.edu\//);

  // Facebook and LinkedIn are institutional CUNY SPS channels not affiliated directly to AI club and are omitted
  const facebook = aiClub.channels.find((ch) => ch.platform === 'facebook');
  assert.equal(facebook, undefined, 'Institutional Facebook must be omitted from AI club profile');

  const linkedin = aiClub.channels.find((ch) => ch.platform === 'linkedin');
  assert.equal(linkedin, undefined, 'Institutional LinkedIn must be omitted from AI club profile');

  // TikTok is unverified on official sources and must be omitted per privacy guidelines
  const tiktok = aiClub.channels.find((ch) => ch.platform === 'tiktok');
  assert.equal(tiktok, undefined, 'Unverified TikTok link must be omitted from site');

  // Verify all channels present on AI club have Verified badge
  for (const ch of aiClub.channels) {
    assert.equal(ch.badge, 'Verified Official Link');
  }
});

test('Screen 4 (Events) contains event schedule and club linkage with 12-hour formatted times', () => {
  assert.ok(EVENTS_DATA.length >= 10, 'Must catalog upcoming campus events from student life and clubs');
  for (const ev of EVENTS_DATA) {
    assert.ok(ev.clubId, 'Every event must link to a valid clubId');
    assert.ok(ev.title, 'Every event must have a title');
    assert.ok(ev.date, 'Every event must have a date');
    // Ensure time is in 12-hour format with AM or PM, not military 24 hours
    assert.match(ev.time, /^(0?[1-9]|1[0-2]):[0-5][0-9]\s*(AM|PM)$/i, `Event "${ev.title}" time must be in 12-hour format (e.g. 7:00 PM), got: ${ev.time}`);
    const matchedClub = CLUBS_DATA.find((c) => c.clubId === ev.clubId);
    assert.ok(matchedClub, `Event "${ev.title}" must link to an existing club`);
  }
});

test('Screen 5 (Official School Forms) maps all 34 clubs to official CUNY SPS join forms and directory', () => {
  assert.equal(CLUBS_DATA.length, 34);
  for (const club of CLUBS_DATA) {
    assert.ok(club.joinUrl, `Club ${club.name} (${club.clubId}) must have an official joinUrl`);
    assert.match(
      club.joinUrl,
      /^(https:\/\/(forms\.office\.com|forms\.cloud\.microsoft)\/|https:\/\/sps\.cuny\.edu\/student-success\/student-life\/student-clubs-and-organizations)/,
      `Club ${club.name} joinUrl must point to Microsoft Forms or CUNY SPS directory`
    );
  }

  const aiClub = CLUBS_DATA.find((c) => c.clubId === 'club-ai');
  assert.ok(aiClub);
  assert.equal(aiClub.joinUrl, 'https://forms.office.com/r/jSfyJUzCqG', 'AI Club must link directly to its official Microsoft Join Form');
});
