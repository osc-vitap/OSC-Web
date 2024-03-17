<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
    FooterIcon,
  } from "flowbite-svelte";
  import OscFullLogo from "../../images/OSC_Full_Logo.svelte";
</script>

<footer aria-label="Site Footer" class="bg-white">
  <div
    class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
  >
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-teal-600">
        <OscFullLogo height="50" />
      </div>

      <ul class="flex justify-center items-center gap-6 mt-8 sm:mt-0">
        <li>
          <a
          href="https://www.linkedin.com/company/oscvitap/"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:opacity-75 flex items-center"
      >
          <span class="sr-only">LinkedIn</span>
          <svg class="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
              <path d="M3 5.012H0V15h3V5.012Z"/>
            </svg>
              
          </a>
        </li>

        <li>
          <a
          href="https://www.instagram.com/osc.vitap/"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:opacity-75 flex items-center"
      >
          <span class="sr-only">Instagram</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          >
              <path
                fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/>
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/osc_vitap"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:opacity-75"
          >
            <span class="sr-only">Twitter</span>
            <svg class="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
            </svg>
            
          </a>
        </li>

        <li>
          <a
            href="https://github.com/osc-vitap"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:opacity-75"
          >
            <span class="sr-only">GitHub</span>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/@opensourcecommunityvit-ap6954"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:opacity-75"
          >
            <span class="sr-only">YouTube</span>
            <svg class="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
              <path fill-rule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clip-rule="evenodd"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <div
      class="grid grid-cols-1 gap-8 pt-8 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
    >
      <div>
        <p class="font-medium text-gray-900">About Us</p>

        <nav aria-label="Footer Navigation - Services" class="mt-6">
          <ul class="space-y-4 text-sm">
            <li>
              <a
                href="https://community.mozilla.org/en/groups/open-source-community/"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
                target="_blank"
              >
                Mozilla Community Portal
              </a>
            </li>

            <li>
              <a
                href="https://www.mozilla.org/en-US/about/governance/policies/participation/"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
                target="_blank"
              >
                Community Participation Guidelines
              </a>
            </li>

            <li>
              <a
                href="/coming-soon"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
              >
                EB Openings
              </a>
            </li>

            <li>
              <a
                href="/coming-soon"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p class="font-medium text-gray-900">Contact Us</p>

        <nav aria-label="Footer Navigation - Company" class="mt-6">
          <ul class="space-y-4 text-sm">
            <li>
              <a
                href="/contact"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
                target="_blank"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="https://github.com/osc-vitap"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://discord.com/invite/DXgfsxXv6c"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
                target="_blank"
              >
                Discord
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p class="font-medium text-gray-900">Events</p>

        <nav aria-label="Footer Navigation - Company" class="mt-6">
          <ul class="space-y-4 text-sm">
            <li>
              <a
                href="https://techeden.oscvitap.org/"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
                target="_blank"
              >
                TechEden
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/playlist?list=PLCi26H2_zeTx0W6GZbHfI8Z5-kiqrGNDW"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
                target="_blank"
              >
                Tech Cast
              </a>
            </li>

            <li>
              <a
                href="/events"
                class="text-gray-700 transition hover:opacity-75"
              >
                More Events
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p class="font-medium text-gray-900">Chapters</p>

        <nav aria-label="Footer Navigation - Legal" class="mt-6">
          <ul class="space-y-4 text-sm">
            <li>
              <a
                href="https://wios.co.in/"
                class="text-gray-700 transition hover:opacity-75"
                rel="noreferrer"
                target="_blank"
              >
                WIOS (Women in Open Source)
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <p class="text-xs text-gray-500">
      &copy; 2023 Open Source Community VIT-AP
    </p>
  </div>
</footer>
