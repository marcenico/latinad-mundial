export const environment = {
  production: true,
  apiSports: 'https://v3.football.api-sports.io',
  timezone:
    Intl.DateTimeFormat().resolvedOptions().timeZone === 'America/Buenos_Aires'
      ? 'America/Argentina/Buenos_Aires'
      : Intl.DateTimeFormat().resolvedOptions().timeZone
};
